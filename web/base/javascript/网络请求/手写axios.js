class Axios {
    constructor() {
        this.defaults = {
            headers: {},
            contentType: 'application/json',
            dataType: 'json',
            timeout: 0,
        };

        // 初始化拦截器
        this.interceptors = {
            request: [],
            response: [],
        };
    }

    // 添加请求拦截器
    useRequestInterceptor(interceptor) {
        this.interceptors.request.push(interceptor);
    }

    // 添加响应拦截器
    useResponseInterceptor(interceptor) {
        this.interceptors.response.push(interceptor);
    }

    // 执行拦截器
    async executeInterceptors(interceptors, context) {
        for (const interceptor of interceptors) {
            context = await interceptor(context);
        }
        return context;
    }

    // 发起请求
    async request(config) {
        try {
            // 执行请求拦截器
            config = await this.executeInterceptors(this.interceptors.request, config);

            return new Promise((resolve, reject) => {
                const { url, method = 'GET', data, headers = {}, contentType = this.defaults.contentType, dataType = this.defaults.dataType, timeout = this.defaults.timeout } = config;

                const xhr = new XMLHttpRequest();
                xhr.open(method, url, true);

                xhr.timeout = timeout;

                xhr.setRequestHeader('Content-Type', contentType);

                for (const key in headers) {
                    xhr.setRequestHeader(key, headers[key]);
                }

                xhr.onreadystatechange = async () => {
                    if (xhr.readyState === 4) {
                        let response = {
                            status: xhr.status,
                            statusText: xhr.statusText,
                            headers: this.parseHeaders(xhr.getAllResponseHeaders()),
                            data: dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText,
                        };

                        // 执行响应拦截器
                        response = await this.executeInterceptors(this.interceptors.response, response);

                        if (xhr.status >= 200 && xhr.status < 300) {
                            resolve(response);
                        } else {
                            reject(response);
                        }
                    }
                };

                xhr.onerror = () => {
                    reject(new Error('Network Error'));
                };

                if (dataType === 'json') {
                    xhr.send(JSON.stringify(data));
                } else {
                    xhr.send(data);
                }
            });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // GET 请求
    get(url, config = {}) {
        return this.request({ ...config, url, method: 'GET' });
    }

    // POST 请求
    post(url, data, config = {}) {
        return this.request({ ...config, url, method: 'POST', data });
    }

    // 解析响应头
    parseHeaders(headersString) {
        const headers = {};
        headersString.split('\n').forEach(line => {
            const [key, ...rest] = line.split(':');
            if (key) {
                headers[key.trim()] = rest.join(':').trim();
            }
        });
        return headers;
    }
}

// 示例用法
const axios = new Axios();

// 添加请求拦截器
axios.useRequestInterceptor(config => {
    console.log('Request Interceptor:', config);
    // 可以在这里修改请求配置
    return config;
});

// 添加响应拦截器
axios.useResponseInterceptor(response => {
    console.log('Response Interceptor:', response);
    // 可以在这里修改响应数据
    return response;
});

// 发送 POST 请求
axios.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
    headers: {
        'X-Custom-Header': 'foobar',
    },
    contentType: 'application/json',
    dataType: 'json',
    timeout: 5000,
})
.then(response => {
    console.log('Request succeeded:', response);
})
.catch(error => {
    console.error('Request failed:', error.message);
});
