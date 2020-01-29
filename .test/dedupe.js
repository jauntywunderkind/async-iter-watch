#!/usr/bin/env node
import tape from "tape"
import Dedupe from "../dedupe.js"
import Fixture001122 from "./_fixture_001122.js"

tape( "dedupe", async function( t){
	t.plan( 4)
	const deduped= new Dedupe({ input: Fixture001122()})
	let expected= [ 0, 1, 2]
	for await( let item of deduped){
		const exp= expected.shift()
		t.equal( item, exp, `item=${exp}`)
	}
	t.equal( expected.length, 0, "length=0")
	t.end()
})
