import Dedupe from "async-iter-dedupe"
import Interval from "async-iter-interval"

/**
* On every `input`, run `fn`
*/
export function AsyncIterWatch({ fn: map, ms= 1000, ...rest}= {}){
	if( !rest.input){
		const signal= rest.signal
		rest.input= new Interval( ms,{ signal})
	}
	if( map){
		rest.map= map
	}
	Dedupe.call( this, rest)
	return this
}
export {
	AsyncIterWatch as default,
	AsyncIterWatch as asyncIterWatch,
	AsyncIterWatch as watch,
	AsyncIterWatch as Watch
}
AsyncIterWatch.prototype= Object.create( Dedupe.prototype, {
})
AsyncIterWatch.prototype.constructor= AsyncIterWatch
