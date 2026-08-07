import dotenv from "dotenv";
import { glob } from "glob";
import fs from "fs";
import { execSync } from "child_process";

//faz a versão do build.json aumentar a cada deploy

const BUILD_FILE = "./src/_data/build.json";

const build = JSON.parse(
    fs.readFileSync(BUILD_FILE, "utf8")
);

let [major, minor, patch] = build.version.split(".").map(Number);

patch++;

build.version = `${major}.${minor}.${patch}`;

const agora = new Date();

build.lastUpdated =
`${String(agora.getDate()).padStart(2,"0")}/${
String(agora.getMonth()+1).padStart(2,"0")}/${
agora.getFullYear()} ${
String(agora.getHours()).padStart(2,"0")}:${
String(agora.getMinutes()).padStart(2,"0")}`;

fs.writeFileSync(
    BUILD_FILE,
    JSON.stringify(build, null, 2)
);

console.log("Versão:", build.version);
console.log("Atualizado em:", build.lastUpdated);

execSync("npm run build", {
    stdio: "inherit"
});

//fim do aumento de versão

dotenv.config();

const files = await glob("_site/**/*", {
    nodir: true,
    ignore: [
        "_site/images/art/**"
    ]
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