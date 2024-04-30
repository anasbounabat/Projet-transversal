import { prisma } from "../config/prisma.js";
class UsersController {
  async index(req, res) {
    try {
      const players = await prisma.player.findMany();
      return res.status(200).json(players);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  async store(req, res) {
    // code here
    const body = req.body;

    try {
      const player = await prisma.player.create({
        data: {
          username: body.username,
          score: body.score,
        },
      });
      return res.status(201).json(player);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

export default new UsersController();
