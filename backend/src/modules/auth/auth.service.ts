import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface LoginDto {
    email: string;
    password: string;
}

export async function login(
    dto: LoginDto
) {

    /*
     Replace with Neon query.
    */

    const user = {
        id: 1,
        email: dto.email,
        role: "ADMIN"
    };

    const token = jwt.sign(
        user,
        process.env.JWT_SECRET!,
        {
            expiresIn: "12h"
        }
    );

    return {

        token,

        user

    };

}

export async function register(body: unknown) {

    const password = await bcrypt.hash(
        (body as any).password,
        12
    );

    return {

        success: true,

        password

    };

}
