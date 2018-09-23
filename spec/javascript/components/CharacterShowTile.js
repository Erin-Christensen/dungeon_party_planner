import CharacterShowTile from '../../../app/javascript/react/components/CharacterShowTile';

describe('CharacterShowTile', () => {
  let wrapper, name, onClick, message, image_url, image_tier
  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy')
    confirm = jasmine.createSpy('confirm spy')
    wrapper = mount(
      <CharacterShowTile
        id='1'
        name='Toughguy'
        task='eat water'
        level='1'
        className='Fighter'
        image_url='/wow'
        image_tier='1'
        statName='Strength'
        statValue='4'
        health='10'
        onClick={onClick}
        confirm={confirm}
      />
    )
  })

  it('should render the task', () => {
    expect(wrapper.find('.task').text()).toEqual('Task: eat water');
  });

  it('should invoke the onClick function from props when clicked', () => {
      wrapper.find('.task_button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    });

  it('should invoke the confirm function from props when clicked', () => {
      wrapper.find('.delete_character').simulate('click');
      expect(confirm).toHaveBeenCalled();
    });

})
