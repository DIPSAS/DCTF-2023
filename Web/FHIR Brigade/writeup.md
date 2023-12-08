First, register an account with Open DIPS.

Then, query FHIR Patient with `family=Skywalker` to find Luke Skywalker, registered with person number 25057726574 and FHIR ID `cdp2019289`:

```
{
// ...
  "entry": [
    {
      "fullUrl": "https://api.dips.no/fhir/patient/cdp2019289",
      "resource": {
        "resourceType": "Patient",
        "id": "cdp2019289",
// ...
        "name": [
          {
            "use": "official",
            "text": "Skywalker, Luke",
            "family": "Skywalker",
            "given": [
              "Luke"
            ]
// ...
```

Next, query FHIR RelatedPerson with `patient=cdp2019289` to find Owen Lars, Luke's adoptive father:

```
// ...
        "extension": [
          {
            "url": "http://dips.no/fhir/StructureDefinition/R4/DIPSRelatedPersonKinship",
            "valueString": "Adoptivfar (Adoptive father)"
          }
// ...
        "name": [
          {
            "text": "Lars, Owen",
            "family": "Lars",
            "given": [
              "Owen"
            ]
          }
        ],
// ...
```

Search for Owen Lars on FHIR Patient with `given=Owen` and `family=Lars` to find his own FHIR Patient ID, `cdp2019291`.

Finally, query FHIR Allergyintolerance with `profile=DIPSAdverseDrugReaction` and `patient=cdp2019291` to find Owen Lars' allergy:

```
// ...
  "entry": [
    {
// ...
        "category": [
          "medication"
        ],
// ...
        "reaction": [
          {
            "substance": {
// ...
              "text": "Lamotrigin"
```

So the allergy is against lamotrigin(e), and the flag is `d:ctf{use-the-force-against-lamotrigin}`