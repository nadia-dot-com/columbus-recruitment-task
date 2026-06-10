"use server"

export async function createUserAction() {

    return "hello new user"
}

export async function sendMessageAction(formData: FormData) {
    const message = formData.get("message");
    return console.log(message);
}