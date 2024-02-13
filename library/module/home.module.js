var username = "john";
var age = 24;

export function Hello() {
    return ` Hello ${username}`;
}
export default function welcome() {
    return ` Welcome to javascript ... ${username} you will be ${age + 1} next year.`;
}