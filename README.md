# Haunted Brewery

This is the app portion for the Haunted Brewery augmented table-top game. It was implemented as a submission for the [IPAs and APIs Hackathon](https://www.averybrewing.com/events/ipas-and-apis-hackathon) put on by Avery Brewing and Mondo Robot.

## Production Instance:

https://stark-thicket-10774.herokuapp.com/

## Generate Model Files

From project root:

```sql
sequelize-auto -o "./models" -d d763clvb09amt6 -h ec2-107-22-235-119.compute-1.amazonaws.com -u wskzmzdcayybbm -p 5432 -x p2I7frk9uxPURqiVFNlU0dT5zu -e postgres -c config/postgres.json
```
