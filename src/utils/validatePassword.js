// src/app/(dashboardLayout)/my-profile/utils.ts
export const validatePassword = (_, value) => {
    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!value || passwordCriteria.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject(
        new Error(
            'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.',
        ),
    );
};
