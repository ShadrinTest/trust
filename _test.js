Feature("Onboarding");

Scenario("registering wallet", async (I) => {
  I.seeAppIsInstalled("com.wallet.crypto.trustapp");
  I.click("#com.wallet.crypto.trustapp:id/new_account_action");
  I.checkOption("#com.wallet.crypto.trustapp:id/acceptCheckBox");
  I.click("CONTINUE");
  I.click("#com.wallet.crypto.trustapp:id/concent");
  I.click("CONTINUE");
  const words = [];
  for (let i = 1; i <= 12; i++) {
    const word = await I.grabTextFrom(
      `//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.view.ViewGroup/android.widget.LinearLayout[${i}]/android.widget.TextView[2]`
    );
    words.push(word);
  }
  I.click("CONTINUE");
  words.forEach((word) => {
    I.click(word);
  });
  I.click("DONE");
  I.click("DONE");
  I.click("ENABLE");
});
