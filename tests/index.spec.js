import { config, mount } from '@vue/test-utils'
import JoditEditor from '@/JoditEditor'
import { Jodit } from 'jodit'
config.showDeprecationWarnings = false
jest.mock('Jodit')
Jodit.mockImplementation(() => ({
  events: {
    on: jest.fn(),
    fire: event => event
  },
  plugins: {
    add: jest.fn()
  }
}))

describe('JoditEditor', () => {
  it('It should update on `changed` event', () => {
    const wrapper = mount(JoditEditor, {
      propsData: {
        value: 'Hello Jodit'
      },
      attachToDocument: true
    })
    wrapper.trigger('changed')
    expect(wrapper.vm.editor.events.on).toBeCalled()
  })

  it('It should set new value to editor', async () => {
    const wrapper = mount(JoditEditor, {
      propsData: {
        value: 'Hello Jodit'
      },
      attachToDocument: true
    })
    await wrapper.setProps({ value: 'Hey Jodit' })
    expect(wrapper.vm.editor.value).toBe('Hey Jodit')
  })

  it('It should set plugins to editor', async () => {
    const plugin = {
      name: 'example',
      callback: () => { }
    }
    // eslint-disable-next-line no-unused-vars
    const wrapper = mount(JoditEditor, {
      propsData: {
        value: 'Hello Jodit',
        plugins: [plugin]
      },
      attachToDocument: true
    })
    expect(Jodit.plugins.add).toBeCalled()
    expect(Jodit.plugins.add).toBeCalledTimes(1)
    expect(Jodit.plugins.add).toHaveBeenCalledWith(plugin.name, plugin.callback)
  })
})
