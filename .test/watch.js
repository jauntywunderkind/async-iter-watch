#!/usr/bin/env node
import tape from "tape"
import Watch from "../watch.js"
import Fixture001122 from "./_fixture_001122.js"

tape( "watch", async function( t){
	t.plan( 1)
	function count(){
		return ++count.n
	}
	count.n= 0

	const
		tStart= Date.now(),
		watch= new Watch({ fn: count, ms: 5})
	await watch.next()
	await watch.next()
	const delta= Date.now()- tStart
	t.ok( delta>= 10, `time ${delta} > 10`)

	// TODO: use abort for cleanup instead
	watch.return()
	t.end()
})
