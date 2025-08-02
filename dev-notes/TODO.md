# TODO

## On the UI

- The Basmalah should appear at the top of every page

### Join Momahidoun form

#### Additional input fields

- Add a profile image
  - See if you can use a service like Tinify to downgrade the image size
  - Make a generic image profile for anonymous Momahidoun (Or use an already built one that is free)

#### Updates to existing input fields

- Make the minimum name length 3 or 4 chars
- Make the required input fields obvious, and differentiate them from the optional input fields
- Make the county input field a required field
- Add a max value for
  - Age when first interacting with porn
  - Addiction duration
- من فضلك؛ قم بملإ هذه الخانة
  - من فضلك، قم بملإ هذه الخانة
- من فضلك، قم بملإ الخانات الضرورية قبل تأكيد الإرسال
- اضف اسماء الخانات التي يجب أن يملاها

### The story feeds

- Break the story to two parts:
  - Presentation: contains metadata (profile data and small portion of the story)
    - It is the part that should be loaded first
  - Details: (the rest of the story)
    - It should only loaded from the server when the user request to read the full story

## Other Tasks

- [ ] Use lazy loading
