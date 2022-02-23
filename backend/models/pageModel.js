const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();
const db = require("../config/Database");

class Page {
  static createPage(name, desc, img, u_id) {
    return db.execute("CALL create_page(?, ?, ?, ?)", [name, desc, img, u_id]);
  }

  static async removePage(id) {
    return await prisma.user_page.delete({
      where: {
        page_id: id,
      },
    });
  }
  static async getPagebyId(id) {
    return await prisma.user_page.findMany({
      where: {
        user_id: id,
      },
    });
  }

  static createPostImage(id, imgAdd) {
    return db.execute("CALL insert_postImage(?, ?)", [id, imgAdd]);
  }

  static removePreviousImg(postId) {
    // return await prisma.
  }

  static updatePage(id, name, desc, img) {
    return db.execute("CALL update_page(?, ?, ?, ?)", [id, name, desc, img]);
  }

  static updateUserImage(id, imgAdress) {
    return db.execute("CALL update_img(?,?)", [id, imgAdress]);
  }
}

module.exports = { Page };
