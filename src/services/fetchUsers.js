export const fetchUsers = async () => {
    try {
        const res = await fetch ('https://randomuser.me/api/?results=30');
        return await res.json();
    } catch (e) {
        console.error('>>>Error<<<', e);
    }
}