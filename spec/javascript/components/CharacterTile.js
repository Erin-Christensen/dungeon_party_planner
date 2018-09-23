import CharacterTile from '../../../app/javascript/react/components/CharacterTile';

describe('CharacterTile', () => {
  let wrapper, name, onClick, message, image_url, image_tier
  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy')
    wrapper = mount(
      <CharacterTile
        key='1'
        id='1'
        className='Fighter'
        level='4'
        image_url='/wow'
        image_tier='1'
        name='Toughguy'
        task='drink water'
        message='new'
        onClick={onClick}
      />
    )
  })

  it('should render message div, if there is one', () => {
    expect(wrapper.find('.message')).toBePresent()
    wrapper.setProps({ message: '' })
    expect(wrapper.find('.message')).not.toBePresent()
  })

  it('should display the Image', () => {
      expect(wrapper.find('img').getDOMNode().getAttribute('src')).toEqual('/wow1.png');
    });

  it('should render the task', () => {
    expect(wrapper.find('.task').text()).toEqual('drink water');
  });

  it('should invoke the onClick function from props when clicked', () => {
      wrapper.find('.task_button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

})
