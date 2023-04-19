const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  const avatarName = `${_id}_${originalname}`;
  //   const [, extension] = originalname.split(".");
  //   const avatarName = `${_id}.${extension}`;

  try {
    const img = await Jimp.read(tmpUpload);
    await img.resize(250, 250);
    await img.write(tmpUpload);

    const resultUpload = path.join(avatarsDir, avatarName);

    await fs.rename(tmpUpload, resultUpload);

    const avatarURL = path.join("avatars", avatarName);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

module.exports = updateAvatar;
