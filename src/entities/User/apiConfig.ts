interface UserRegisterApi {
    api: string;
}

interface UserLoginApi {
    api: string;
}

export const userRegisterApi: UserRegisterApi = {
    api: 'https://reqres.in/api/register',
};

export const userLoginApi: UserLoginApi = {
    api: 'https://reqres.in/api/login',
};
