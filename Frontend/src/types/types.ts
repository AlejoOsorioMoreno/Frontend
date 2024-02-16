export interface AuthResponse{
    body: {
        user: User;
        accessToken: string;
        refreshToken: string;
    };

}

export interface AuthResponseError{
    body:{
        error: string;
    }
}


export interface User{
    id: string;
    name: string;
    username: string;
    imageProfile:string;
}

export interface AccessTokenResponse{
    statusCode: number;
    body: {
        accesToken: string;
    };
    error?: string;
    
}