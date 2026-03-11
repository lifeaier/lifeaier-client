class ApiService {
    static apiUrl = process.env.REACT_APP_API_URL;  
    static onAuthFail = null;

    static setAuthFailHandler(handler) {
        this.onAuthFail = handler;
    }

    static renewToken = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/token/renew`, {
            method: "POST",
            credentials: "include",
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Token renew failed:", errorText);
            return null;
        }

        const authHeader = response.headers.get("Authorization");
        return authHeader?.replace("Bearer ", "");
    };

    static request = async (url, { auth = true, ...options } = {}) => {
        
        let headers = {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        };

        if (auth) {
            const token = await this.renewToken();
            if (!token) {
                this.onAuthFail?.();
                throw new Error("Auth required");
            }
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            ...options,
            credentials: auth ? "include" : "omit",
            headers,
        });

        if (!response.ok) throw new Error(response.status);
        return response;
    };
    
}

export default ApiService;