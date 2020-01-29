export async function *Fixture001122(){
	for( let i= 0; i<= 2; ++i){
		yield i
		yield i
	}
}
export default Fixture001122
