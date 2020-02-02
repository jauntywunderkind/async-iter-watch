import Dedupe from "async-iter-dedupe"
import Interval from "async-iter-interval"

/**
On every `input`, run `fn`
*/
export function AsyncIterWatch({ fn, ms= 1000, interval, ...rest}= {}){
	if( !interval){
		const signal= rest.signal
		rest.input= new Interval( ms,{ signal})
	}else{
		rest.input= interval
	}
	Object.defineProperty( this, "fn", {
		value: fn,
		writable: true
	})
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
	_maps: {
		value: [ "fn", "_dedupe", "map"]
	},
})
AsyncIterWatch.prototype.constructor= AsyncIterWatch
