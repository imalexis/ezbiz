# Schema

# EntForm (1) : (M) EntFormQuestion
# EntForm (1) : (M) EntFormInstance
# EntFormQuestion (1) : (M) EntFormQuestionResponse

# EntForm
    - name
    - description
    - enabled
    - created_at
    - updated_at
    - created_by
# EntFormQuestion
    - title
    - label
    - type
    - required
    - extra_data
    - created_at
    - updated_at
    - created_by

# EntFormInstance
    - status
    - created_at
    - updated_at
    - created_by

# EntFormQuestionResponse
    - label
    - value
    - created_at
    - updatrd_at
    - created_by
