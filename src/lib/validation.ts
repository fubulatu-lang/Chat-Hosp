export const Validation = {

    email(value: string) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    },

    phone(value: string) {

        return value.length >= 10;

    },

    required(value: unknown) {

        return value !== null &&
            value !== undefined &&
            value !== "";

    }

};