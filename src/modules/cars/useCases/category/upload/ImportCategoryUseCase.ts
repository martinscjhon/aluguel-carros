import { ICategoryRepository } from "../../../repositories/categories/ICategoryRepository"
import fs from 'fs'
import { parse } from "csv-parse"

interface IImportCategory {
    name: string
    description: string
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoryRepository) { }

    loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = []
            const stream = fs.createReadStream(file.path)
            const parsefile = parse()

            stream.pipe(parsefile)

            parsefile.on("data", async (line) => {
                const [name, description] = line

                categories.push({
                    name,
                    description
                })
            })
                .on("end", () => {
                    resolve(categories)
                })
                .on("error", (err) => {
                    reject(err)
                })
        })

    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategory(file)

        categories.map((category) => {
            const { name, description } = category;
            const existCategory = this.categoriesRepository.findByName(name)

            if (!existCategory) {
                this.categoriesRepository.create({
                    name, 
                    description
                })
            }
        })     
    }
}

export { ImportCategoryUseCase }