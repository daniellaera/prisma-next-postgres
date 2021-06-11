import prisma from "../../lib/prisma";

export default async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            res.json({ error: 'You should have an id!' });
            return;
        }
        const user = await prisma.user.delete({
            where: { id }
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong!' })
    }
}