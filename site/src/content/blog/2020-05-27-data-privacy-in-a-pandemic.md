---
title: "Data Privacy In a Pandemic"
subtitle: "Analyzing Different Approaches to Covid-19 Contact Tracing"
reading_duration: 6
publishDate: 05/27/2020
blurb: "As nations around the world begin to gradually reopen, governments are looking at all options in hopes of containing future outbreaks Their holy grail: Contact Tracing Apps"
hero_image: "/blog/data-privacy-pandemic/hero.jpeg"
hero_image_owner: "Tim Mossholder"
hero_image_owner_url: "https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_location: "Unsplash"
hero_image_location_url: "https://unsplash.com/s/photos/corona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
---
Originally published on <a href="https://medium.com/towards-data-science/data-privacy-in-a-pandemic-901e828b850a" target="_blank" class="italic underline">Towards Data Science</a>

As nations around the world begin to gradually reopen, governments are looking at all options in hopes of containing future outbreaks.

Their holy grail: Contact Tracing Apps


Experts have already raised concerns about the security and effectiveness of these apps. But, before we get into that, let’s discuss the analog counterpart.
 

For many of us, this may be the first time we have heard of <a href="https://www.webmd.com/lung/news/20200504/what-is-contact-tracing-and-how-does-it-work#1" target="_blank" class="underline">Contact Tracing</a>, but it is nothing new. Contact Tracing has been used by public health officials for centuries. Most notably, to contain STD/STI transmissions.

 

First, they isolate the infected person to prevent further spread, and then they track down every individual who they were in contact with. They do all of this <a class="italic">without disclosing the identity of the individual</a>. That last part is critical to this operation, contact tracing does not require the identity to be revealed and privacy is essential.

 

So, what have governments and private companies been doing to bring the process to the digital world? Well, let’s discuss the two approaches being used.

 

<div class="flex justify-center"><img src="/./blog/data-privacy-pandemic/electric_cabinets.jpg" alt="Room full of servers" class=""></div>
<div class="text-center">Photo by <a href="https://unsplash.com/@ismailenesayhan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="underline">İsmail Enes Ayhan
</a>on <a href="https://unsplash.com/s/photos/centralized-server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="underline">Unsplash</a>
</div>

<h1 class="text-2xl pt-5 font-black">Centralized Approach</h1>

In a centralized approach, a user’s phone sends their GPS location to a central server, along with the time they were there. Both, United Kingdom’s NHS and France, have decided to go this route.

 

The biggest flaws with a centralized approach is: security & privacy, and battery.

 

The government knowing their citizens’ exact location at any given moment used to be the Big Brother nightmare that kept George Orwell awake at night. One pandemic later, millions around the globe are volunteering that information. As an American, it is part of the culture to distrust the government, but providing near real-time location is no doubt in some young-adult dystopia novels.

 

The UK and France have argued that the application will be secure and that the data will not be used for any purposes other than the contact tracing it is meant for. In an ideal world, the protectives provided to EU citizens through the GDPR (not even sure how this works with Brexit) would give them the necessary legal safeguards. But, in the event that the government lies and uses the data unlawfully, who is going to keep them accountable? That same government?

 

Moving past Big Brother, experts have also raised concerns with malicious actors gaining access to the data. The UK’s contact-tracing app is currently being tested in the Isle fo Wight. Concurrently, they have shared access to cybsecurity experts to receive feedback. Well, as anyone could have guessed, the <a href="https://www.businessinsider.com/cybersecurity-experts-find-security-flaws-in-nhs-contact-tracing-app-2020-5" target="_blank" class="underline">cybersecurity experts found some security flaws</a>. Adding insult to injury, one of their recommendations was to switch to a decentralized approach, which they had <a href="https://news.yahoo.com/nhs-rejects-apple-google-coronavirus-150047833.html" target="_blank" class="underline">already rejected last month</a>.

 

For any contact-tracing app to work, whether centralized or decentralized, the phone will have to be continuously broadcasting information. Adding all the times a phone has to do this throughout the day, it puts a dent on the battery. However, centralized approaches have an added drawback, specifically with iOS devices. Apple does not allow bluetooth information to be broadcasted by an application in the background. Apple has already made it clear to companies that it <a href="https://www.bbc.com/news/technology-52366129" target="_blank" class="underline">will not ease these restrictions</a>. To get around this, some apps on iOS need to <a href="https://www.theguardian.com/australia-news/2020/may/15/covid-safe-app-australia-how-download-does-it-work-australian-government-covidsafe-covid19-tracking-downloads" target="_blank" class="underline">remain open to work</a>.

 

Singapore has attempted to reach a balance between using a centralized approach, but addressing the public’s concerns. Singapore has open-sourced their application, and state that data is not shared to a central server unless <a href="https://www.bloomberg.com/news/articles/2020-05-23/singapore-contract-trace-app-is-opt-in-as-long-as-possible-fm" target="_blank" class="underline">they turn positive</a>.

 

If true, Singapore could be a model for other countries who are still adamant about using a centralized approach. The final concern that will remain is the opt-in/opt-out dilemma.

 

India, the world’s largest democracy, has already required citizens to download the application if they want to keep working or avoid possible punishment. Even Singapore, despite being opt-in, have indicated it may not be optional forever. The University of Alabama system in the United States is “encouraging” faculty and students to use their app, <a href="https://www.nytimes.com/reuters/2020/05/22/technology/22reuters-health-coronavirus-alabama-apps.html" target="_blank" class="underline">but it is not certain if they will require it to be on-campus</a>. With still fairly limited data protection laws around the world, individuals may find themselves forced to download these apps. If not by their governments, by their employers or grocery stores or any other businesses they wish to work with.

 

As a result of moves like these, a programmer in <a href="https://www.buzzfeednews.com/article/pranavdixit/india-aarogya-setu-hacked" target="_blank" class="underline">India has circumvented the app</a>. Now, they walk freely with a constantly showing the ‘Safe’ badge without broadcasting any data. This is the best-case scenario. Experts have shared concerns of <a href="https://www.brookings.edu/techstream/inaccurate-and-insecure-why-contact-tracing-apps-could-be-a-disaster/" target="_blank" class="underline">individuals sending out false-positives</a>. Doing so, would end up causing more harm than good.

 

<div class="flex justify-center"><img src="/./blog/data-privacy-pandemic/person_on_phone.jpeg" alt="Woman wearing mask looking at phone." class=""></div>
<div class="text-center">Photo by <a href="https://www.pexels.com/es-es/@ketut-subiyanto?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank" class="underline">Ketut Subiyanto</a> on <a href="https://www.pexels.com/es-es/foto/mujer-telefono-inteligente-vehiculo-efecto-desenfocado-4429299/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank" class="underline">Pexels</a>
</div>

<h1 class="text-2xl pt-5 font-black">Decentralized Approach</h1>

The decentralized approach has been led by a collaboration between <a href="https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/" target="_blank" class="underline">Apple and Google</a>. Both companies have recently sent out updates to their respective phones that adds this opt-in API.

 

The way the API works is fairly simple, a user’s phone creates identifier codes that change frequently. If the phone detects another phone nearby for a significant amount of time, the phones will exchange their current identifying codes. If a user is diagnosed with Covid-19, the app will broadcast their codes for the previous 2 weeks with a server. Everyone’s phone periodically checks this server, and if they find a match with an infected code, they will receive a notification.

 

Through this approach, battery will still be an issue because bluetooth needs to be on at all times, but on iOS devices it won’t have the drawback of having to be turned on as the centralized approach does.

 

So far, <a href="https://www.engadget.com/switzerland-swisscovid-coronavirus-contact-tracing-app-pilot-153813626.html?guccounter=1" target="_blank" class="underline">Switzerland</a> is one of the first to test out this API with their app, the Australian government has indicated that they will also <a href="https://www.theguardian.com/australia-news/2020/may/15/covid-safe-app-australia-how-download-does-it-work-australian-government-covidsafe-covid19-tracking-downloads" target="_blank" class="underline">implement this API into their existing application</a>, and Germany has also <a href="https://news.yahoo.com/coronavirus-german-contact-tracing-app-174902502.html" class="underline" target="_blank">adopted this API after previously been working on a centralized approach</a>.

<h1 class="text-2xl pt-5 font-black">So, the decentralized approach is perfect, right?</h1>

Well, unfortunately, no. Putting aside the privacy and security concerns, efficacy is still a concern.

 

If Covid-19 diagnoses are entered by the users, there is a guarantee of at least some trolls sending out false-positives, negatively impacting the trust the public has on the app.

 

What about the times you don’t have your phone? Or if your phone dies? Or the poor and elderly who may simply not have a <a href="https://appleinsider.com/articles/20/05/13/nhs-admits-contact-tracing-app-wont-work-on-older-iphones" target="_blank" class="underline">phone that can install the app?</a>

 

I commend Apple and Google for working on an API that puts security and privacy at the center of their design. I also commend the software engineers working on the contact tracing apps. However, this is new technology; we are not yet sure how effective it truly is. Even if it works perfectly, you are notified that you may have been exposed to the virus, possibly after you have exposed others.

 

Contact tracing apps are not a replacement for effective treatment or a vaccine, nor are they replacements for widespread testing and personal protective equipment to limit spread. Like everyone else, I hope anything these days will slow the pandemic, but it is important we do not gain a false sense of security from these apps and end up spreading the virus even further.

 

Thanks for reading my post. I’d love to hear your thoughts, either in the comments here or on <a href="https://twitter.com/SoyCarlosEO" target="_blank" class="underline">Twitter (@SoyCarlosEO)</a>.