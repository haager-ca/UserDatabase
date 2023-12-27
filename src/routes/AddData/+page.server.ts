import prisma from "$lib/prisma";
import { fail, redirect } from '@sveltejs/kit';


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        let firstName = data.get("FirstName");
        let lastName = data.get("LastName");
        let userEmail = data.get("Email");
        let birthday = data.get("BirthDate");
        let userAdress = data.get("Adress");

        if (!firstName || !lastName || !userEmail || !birthday || !userAdress) {
            return fail(400, { firstName, lastName, userEmail, birthday, userAdress, missing: true });
        }

        if (typeof firstName != "string" || typeof lastName != "string" || typeof userEmail != "string" || typeof userAdress != "string") {
            return fail(400, { incorrect: true })
        }

        await prisma.post.create({
            data: {
                firstName,
                lastName,
                userEmail,
                birthday,
                userAdress
            },
        });
    }
}