import { Action, config, Module, Mutation, VuexModule } from 'vuex-module-decorators'

config.rawError = true

@Module({ name: 'counter', stateFactory: true, namespaced: true })
export default class Counter extends VuexModule {
  private count = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private INCREMENT(value: number) {
    this.count += value
  }

  @Mutation
  private DECREMENT(value: number) {
    this.count -= value
  }

  @Action
  public aumentar() {
    this.context.commit('INCREMENT', 1)
  }

  @Action
  public diminuir() {
    this.context.commit('DECREMENT', 1)
  }
}
