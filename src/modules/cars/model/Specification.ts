
import { v4 as uuidV4 } from 'uuid'

class SpecificationModel {
    id?: string
    name: string
    description: string
    created_At: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { SpecificationModel }