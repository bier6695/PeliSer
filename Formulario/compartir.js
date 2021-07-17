public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.share, menu);
    MenuItem item = menu.findItem(R.id.share_item);
    actionProvider = (ShareActionProvider) item.getActionProvider();

    // Create the share Intent
    String shareText = https://play.google.com/store/apps/details?id=cineserie.ahsr;
    Intent shareIntent = ShareCompat.IntentBuilder.from(this)
        .setType("text/plain").setText(shareText).getIntent();
    actionProvider.setShareIntent(shareIntent);
    return true;
}