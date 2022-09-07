const DbFunction = (db) =>{
	//insert usernames to table names.
	const greets = async (name) =>{
		const result = await nameGreeted(name)
		if(result === false){
			 await db.none('INSERT INTO GreetingNames (username, counter) VALUES ($1,$2);', [name,1])
		}
		else {
			let counter_net = await db.oneOrNone('SELECT counter FROM GreetingNames where username = $1',[name])
			await db.none('UPDATE GreetingNames SET counter = counter + 1 WHERE username = $1', [name])
		}
	}

	// check if the user already greeted
	
	const nameGreeted = async (name) => {
        const result = await db.oneOrNone('SELECT username FROM GreetingNames WHERE username = $1', [name])
        return result !== null
    }
    //get all GreetingNames in th table
    const getNames= async()=>{
    	const result = await db.manyOrNone('SELECT * FROM GreetingNames')
        return result
    }


    // count how many time a user has been greeted
    const getUserCounter = async (counter) => {
        const result = await db.one('SELECT counter FROM GreetingNames WHERE username = $1', [counter])
        return result.counter

    }
    //get counter for all users
      const getCounter = async () => {
        const result = await db.one('SELECT count(*) FROM GreetingNames')
        return result.count
    }
    //clear all names in the table
 const clearNames = async () => {
        await db.none('Delete FROM GreetingNames')
    }
    return{
    	greets,
    	nameGreeted,
    	getCounter,
    	clearNames,
    	getNames,
    	getUserCounter
    }
}
module.exports = DbFunction