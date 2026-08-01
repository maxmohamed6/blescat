import dotenv from "dotenv";
import { glob } from "glob";
import fs from "fs";

dotenv.config();

const files = await glob("_site/**/*", {
    nodir: true
});

const form = new FormData();

for (const file of files) {
    const relativePath = file
        .replace("_site\\", "")
        .replaceAll("\\", "/");

    form.append(
        relativePath,
        new Blob([fs.readFileSync(file)])
    );
}

const response = await fetch(
    "https://neocities.org/api/upload",
    {
        method: "POST",
        headers: {
            Authorization:
                "Basic " +
                Buffer.from(
                    `${process.env.NEOCITIES_USER}:${process.env.NEOCITIES_PASSWORD}`
                ).toString("base64")
        },
        body: form
    }
);

const data = await response.json();

console.log(data);