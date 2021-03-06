module.exports = {

    getAllWords: async (req,res) => { // this is for my home page 
        try {
            const db = req.app.get('db') 
            const words = await db.words.get_words() 
            res.status(200).send(words)
         } catch (error) {
            console.log('error getting words', error)
            res.status(500).send(error)
        }
    },

    getUserStudyWords: async (req, res) => { // this is for the study page
        try {
            const db = req.app.get('db')
            const {user_id} = req.session.user 
            const words = await db.words.user_study_words(user_id)
            res.status(200).send(words)
        } catch  (error) {
            console.log('error getting study', error)
            res.status(500).send(error)
        }  
    },

    addWord: async (req,res) => { 
        try { const db = req.app.get('db')
            const {id} = req.params  
            const {user_id} = req.session.user
            const words = await db.words.add_word([user_id, id]) 
            res.status(200).send(words)
        } catch (error) {
            console.log('error adding word', error)
            res.status(500).send(error)
        }
    },

    deleteWord: async (req, res) => { // this should be used from the study page
        try { 
            const db = req.app.get('db')
            const {id} = req.params
            const words = await db.words.delete_word(id)
            res.status(200).send(words)
        } catch (error) {
            console.log('error deleting word', error)
            res.status(500).send(error)
        }
    }


}