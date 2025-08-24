document.addEventListener('DOMContentLoaded', function () {
    var editActivityModal = document.getElementById('editActivityModal');
    if (editActivityModal) {
        editActivityModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget;

            // Extract info from data-* attributes
            var activityId = button.getAttribute('data-activity-id');
            var activityName = button.getAttribute('data-activity-name');
            var totalItems = button.getAttribute('data-total-items');
            var score = button.getAttribute('data-score');
            var studentId = button.getAttribute('data-student-id');

            // Update the modal's content.
            var modalTitle = editActivityModal.querySelector('.modal-title');
            var activityIdInput = editActivityModal.querySelector('#modal-activity-id');
            var studentIdInput = editActivityModal.querySelector('#modal-student-id');
            var activityNameInput = editActivityModal.querySelector('#modal-activity-name');
            var totalItemsInput = editActivityModal.querySelector('#modal-total-items');
            var scoreInput = editActivityModal.querySelector('#modal-score');

            modalTitle.textContent = 'Edit score for ' + activityName;
            activityIdInput.value = activityId;
            studentIdInput.value = studentId;
            activityNameInput.value = activityName;
            totalItemsInput.value = totalItems;
            scoreInput.value = score;
        });
    }
});
