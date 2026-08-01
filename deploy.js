import dotenv from "dotenv";
import Neocities from "neocities";

dotenv.config();

const api = new Neocities(
    process.env.NEOCITIES_USER,
    process.env.NEOCITIES_PASSWORD
);

api.upload("_site", (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("O site foi atualizado!");
});