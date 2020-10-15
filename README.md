# Muti-Step Application Submission Flow

## Task 1 Planning

### Assumptions
- Since we have a design we can use that to drive data and data to drive development
- We'll create a dummy API JSON file to use as a mock vs API server.
- Utilize Formik for Form states and existing UI components where applicable.
- This can either be done server side in next using it's routes for each form page but since you mentioned a lot of things are moving or have moved into the client side we'll do the same here for consistency.  We'll create a route for each form page with React Router.

## Task 2 Build API
Since we want this to have dynamic abilities, I want to create generic form objects and arrays of objects to scope different pages.  In the design there is a 4 page wizard.

We'll start with an outer form array of objects to hold each page:
`{form: []}`

Each form will have it's own object that will represent the form page.  We'll have a meta object to hold page meta and a data object to hold form fields:
```
{
  form: [
    {
      meta: {
        title: "Who is the primary contact for this policy?", 
        description: "This person will receive all communications from Newfront about this policy.  You can change this contact information later.  If you're not sure, just add your contact information. "
      },
      data: []
    }
  ]
}
```

Next we'll add the form field data.  Each item will represent a fieldset with items like a label, type, etc.  I like to keep the attributes the same as the component in this case Formik or HTML attributes like `placeholder`.  This will allow ES6 shorthand to happen naturally and we can use the spread `...` operator easily as well:
```
{
  form: [
    {
      meta: {
        title: "Who is the primary contact for this policy?", 
        description: "This person will receive all communications from Newfront about this policy.  You can change this contact information later.  If you're not sure, just add your contact information. "
      },
      data: [
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          required: true
        },
        {
          name: 'role',
          label: 'Role',
          type: 'text',
          required: false
        },
        {
          name: 'phoneNumber',
          label: 'Phone Number',
          type: 'text',
          required: true
        }
      ]
    }
  ]
}
```
We'll determine previous and next buttons by array position.  If `form[0]` there will be no previous button.  If `form[length-1]` we're at the final step so we'll do a final form submission.
