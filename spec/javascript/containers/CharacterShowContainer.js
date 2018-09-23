import CharacterShowContainer from '../../../app/javascript/react/containers/CharacterShowContainer';
import CharacterShowTile from '../../../app/javascript/react/components/CharacterShowTile';
import fetchMock from 'fetch-mock';

describe('CharactersShowContainer', () => {
  let wrapper;
  let class_type = {
    name: "Fighter",
    description: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat.",
    main_stat: "Strength",
    suggested_task: "Do 20 push ups!",
    image_url:'/wow'
  }
  let character1 = {
    id: 1,
    user_id: 1,
    class_type: class_type,
    name: 'SquirtleMan',
    level: 1,
    image_tier: 1,
    task: 'do dishes',
    stat: 1,
    health: 10,
    message: 'new character created'
  }

  beforeEach(() => {
    spyOn(CharacterShowContainer.prototype, 'handleClick').and.callThrough();
    fetchMock.get(`/api/v1/characters/${character1.id}`, {
      status: 200,
      body: {
        "character": character1
      }
    });
    wrapper = mount(<CharacterShowContainer
      params={ {id: character1.id} }
    />);
  });

  afterEach(fetchMock.restore)

  it('renders a CharacterShowTile', (done) => {
    setTimeout(() => {
      expect(wrapper.find(CharacterShowTile)).toBePresent();
      done()
    }, 0)
  })

  it('renders a CharacterShowTile with expected props', (done) => {
    setTimeout(() => {
      expect(wrapper.find(CharacterShowTile).props()).toEqual({
        id: 1,
        name: 'SquirtleMan',
        task: 'do dishes',
        level: 1,
        className: 'Fighter',
        imageUrl: '/wow',
        imageTier: 1,
        statName: 'Strength',
        statValue: 1,
        health: 10,
        onClick: jasmine.any(Function),
        confirm: jasmine.any(Function)
      });
      done()
    }, 0)
  })

  // it('updates the character level when task is clicked', (done) => {
  //   let options = {
  //     credentials: 'same-origin',
  //     method: 'PATCH',
  //     headers: {'Content-Type': 'application/json'}
  //   }
  //   fetchMock.mock('/api/v1/characters/${character1.id}', {
  //     status: 201,
  //     body: {source: 'show'}
  //   }, options)
  //   //.catch()
  //   setTimeout(() => {
  //     let characterLevel = wrapper.find(CharacterShowTile).props().level
  //     wrapper.find('.task_button').simulate('click')
  //     setTimeout(() => {
  //       expect(wrapper.find(CharacterShowTile).props().level).toEqual(characterLevel + 1)
  //       done()
  //     })
  //   }, 0)
  // })
})
