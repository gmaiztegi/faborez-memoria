function getRequestStatus() {
  if (this.finalReplyId) {
    return 'resolved';
  } else if (moment(this.expiresAt).isBefore()) {
    return 'expired';
  } else {
    return 'open';
  }
}
