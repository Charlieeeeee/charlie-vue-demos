import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

interface Ideveloper {
    name: String;
    age: Number;
    sex: String | Number
}
interface IAboutState {
    developers: Array<Ideveloper>
}

@Module({
    name: 'about',
    dynamic: true,
    store
})
export default class About extends VuexModule implements
IAboutState {
    developers: Array<Ideveloper> = [];

    @Mutation
    updatedDeveloper (payload: Array<Ideveloper>): void {
      this.developers = payload
    }

    @Action
    async getDevelopers () {
        const res: Array<Ideveloper> = await request();
        this.updatedDeveloper(res)
    }
}

export const AboutStore = getModule(About)

function request () {
    return new Promise<Array<Ideveloper>>(resolve => {
        setTimeout(()=>{
            resolve([
                {
                    name: 'charlie',
                    age: 24,
                    sex: 1
                },
                {
                    name: 'george',
                    age: 25,
                    sex: 1
                },
                {
                    name: 'cindy',
                    age: 26,
                    sex: 0
                },
            ])
        })
    })
}