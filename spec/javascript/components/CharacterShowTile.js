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




// it('updates the character level when task is clicked', (done) => {
//   let options = {
//     credentials: 'same-origin',
//     method: 'PATCH',
//     headers: {'Content-Type': 'application/json'}
//   }
// fetchMock.mock('/api/v1/characters/${character1.id}', {
//   status: 200,
//   body: character1
// }, options)
// setTimeout(() => {
//   let characterLevel = wrapper.find(CharacterTile).props().level
//   wrapper.find('.task_button').simulate('click')
//   setTimeout(() => {
//     expect(wrapper.find(CharacterTile).props().level).toEqual(characterLevel + 1)
//     done()
//   })
// }, 0)
// })
