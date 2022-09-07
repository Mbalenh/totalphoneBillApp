const DbFunction = (db) =>{
	//insert usernames to table names.
	const insertUsername = async (name) =>{
		const result = await nameGreeted(name)
		if(result === false){
			 await db.none('INSERT INTO totalphoneBill (username, price_plan) VALUES ($1,$2);', [name])
		}
		else {
			 await db.oneOrNone('SELECt price_plab FROM totalphoneBill where username = $1',[name])
			
	}

	// check if the user already greeted
	
	const pricePlanupdate = async (name) => {
        const result = await db.oneOrNone('SELECT username FROM totalphoneBill WHERE username = $1', [name])
        return result !== null
    }
    //get all GreetingNames in th table
    const getPlans= async()=>{
    	const result = await db.manyOrNone('SELECT * FROM totalphoneBill')
        return result
    }


    return{
    	insertUsername,
        pricePlanupdate,
        getPlans


    }
}
module.exports = DbFunction