I love the Star Wars movies and TV series, but I feel like George Lucas neglected to answer a very important question:

_Which medication is Luke Skywalker's adoptive father allergic to?_

Can you use [Open DIPS](https://open.dips.no/) to close this glaring plot hole?

The flag is `d:ctf{use-the-force-against-<medication>}` where `<medication>` is the name of the drug Luke Skywalker's adoptive father is allergic to - if he is allergic to aspirin, the flag would be `d:ctf{use-the-force-against-aspirin}`.

Hint 1: The FHIR APIs will be very useful here - in particular, you'll want to look at Patient, RelatedPerson and AllergyReaction.