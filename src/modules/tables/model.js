const {fetchAll, fetch} = require('../../lib/postgres')

const GET_ALL_BOARDS = `
   SELECT 
      board_id,
      board_name
   FROM boards 
`

const GET_ALL_ITEMS = `
   SELECT
     item_id,
     item_title,
     board_id
   FROM items
`

const GET_ALL_LISTS = `
   SELECT
    list_id,
    list_name,
    list_number,
    list_comment,
    item_id
   FROM lists
`

const Update = `
   update
   lists
   set item_id = $1
   where list_id = $2 RETURNING *
`


const ADD = `
   INSERT INTO lists(
      list_name,
      list_number,
      list_comment,
      item_id
   ) VALUES (
      $1, $2, $3, 1
   ) returning *
`

const addA =  async ({userName, userNumber, userComment}) => {
   let res = await fetch(ADD, userName, userNumber, userComment)

   return 'ok'
}

const postAll = async ({ to, list}) => {
   let res = await fetch(Update, to, list)
   return 'ok'
}

const ADD_ITEM = `
   INSERT INTO items(
      item_title,
      board_id
   ) VALUES
   (
      $1, $2
   )
`

const addItem = async ({itemName, boardIn}) => {
   let res = await fetch(ADD_ITEM, itemName, boardIn+1)
   return 'ok'

}



const getAll = async () => {
   let boards =[]
   
   let getAllBoards = await fetchAll(GET_ALL_BOARDS)
   let getAllItems = await fetchAll(GET_ALL_ITEMS)
   let getAllLists = await fetchAll(GET_ALL_LISTS)
   getAllBoards.map(board => {
      let items = []
      getAllItems.map(item => {
         if(item.board_id == board.board_id) {
            let lists = []
            getAllLists.map(list => {
               if (item.item_id == list.item_id) {
                  let obj3 = {
                     id: list.list_id,
                     userName: list.list_name,
                     userNumber: list.list_number,
                     userComment: list.list_comment
                  }
                  lists.push(obj3)
               }

            })
            let obj2 = {
               id: item.item_id,
               title: item.item_title,
               lists: lists
            }

            items.push(obj2)
         }
      })

      let obj = {
         id: board.board_id,
         title: board.board_name,
         items: items
      }
      boards.push(obj)
   })

   return boards
  
   
}


module.exports =  {
   getAll,
   postAll,
   addA,
   addItem
}