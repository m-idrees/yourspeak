import ys from '../objects/objects.cy'
describe('your speak', () => {
 
  it('Create Post', () => {
    const ord = new ys()
        ord.visit()
        ord.createpost()
        ord.logout()
    })
})