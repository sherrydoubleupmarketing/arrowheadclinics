const INVALID_DOMAINS = [
  "https://www.llss.website",
  "https://www.superherohype.com",
  "https://www.newsivae.in",
  "https://www.illnesstests.com",
  "https://www.play.google.com/store/apps/details?id=ru.fotostrana.sweetmeet",
  "https://www.personal-injury-attorney-now.life",
  "https://www.bisprofiles.com",
  "https://www.personal-injury-attorny-pros.life",
  "https://www.play.google.com/store/apps/details?id=com.doodlejoy.studio.kidsdoojoy",
  "https://www.www.adsensecustomsearchads.com",
  "https://www.familylegalservices.site",
  "https://www.play.google.com/store/apps/details?id=com.taggedapp",
  "https://www.instaproapk.co.in",
  "https://www.293f80a3bf0d78fa548f864a809e0aaa.safeframe.googlesyndication.com",
  "https://www.nokillnetwork.org",
  "https://www.consuladoguatemalaenusa.com",
  "https://www.bankshiksha.in",
  "https://www.npidb.org",
  "https://www.play.google.com/store/apps/details?id=com.boys.drawing.coloring.games",
  "https://www.disability.help",
  "https://www.horseweb.com",
  "https://www.floridacommunitynetwork.net",
  "https://www.rentassistance.us",
  "https://www.upworksearch.com",
  "https://www.offerup.com",
  "https://www.f5d9b682a18c27e51746f32b3c8b40dc.safeframe.googlesyndication.com",
  "https://www.apkgrey.com",
  "https://www.studylive.in",
  "https://www.ksts.site",
  "https://www.trucepaint.net",
  "https://www.chipandgames.com",
  "https://www.rulingnews.com",
  "https://www.dizikorea.co",
  "https://www.newsofjob.news",
  "https://www.legalaidoffices.com",
  "https://www.us-passport-service-guide.com",
  "https://www.scholarships.store",
  "https://www.benefitsofhealth.xyz",
  "https://www.consuladonicaraguaenusa.com",
  "https://www.worldstar.com",
  "https://www.floridaparcels.com",
  "https://www.pissedconsumer.com",
  "https://www.personal-injury-attorney-view.today",
  "https://www.e853094972ef8483afb9163fca4c05cb.safeframe.googlesyndication.com",
  "https://www.flowaqua.online",
  "https://www.accidentinjury-attorneynear-me.website",
  "https://www.homelessshelterdirectory.org",
  "https://www.binapany.xyz",
  "https://www.wikihow.com",
  "https://www.headquartersof.com",
  "https://www.yellowpages.com",
  "https://www.nowinnofeelawyers.life",
  "https://www.hawkinsurance.online",
  "https://www.personalinjurylaywers.site",
  "https://www.pinaple.in",
  "https://www.bizapedia.com",
  "https://www.family-attorneys-near-me-guide.life",
  "https://www.ltips.xyz",
  "https://www.play.google.com/store/apps/details?id=com.gaming.mob.grand.gangster.chase.openworld.city.crime.simulator",
  "https://www.playfulepiczone.top",
  "https://www.bookhotelcompare.com",
  "https://www.techexpress360.in",
  "https://www.gotogetinsurance.online",
  "https://www.infogallery24.com",
  "https://www.djrdx.com",
  "https://www.info24.com.bd",
  "https://www.roomheaterprice.com",
  "https://www.dwarkacourier.com",
  "https://www.googleads.g.doubleclick.net",
  "https://www.parcelsapp.com",
  "https://www.usnews.com",
  "https://www.pajla.com",
  "https://www.consuladosdenicaragua.com",
  "https://www.gamesgarden.info",
  "https://www.jobblazehub.com",
  "https://www.exblog.jp",
  "https://www.97e3ee08f648088012b004d25300d691.safeframe.googlesyndication.com",
  "https://www.employment-attorneys-now.life",
  "https://www.insurancebhau.shop",
  "https://www.securetechhub.online",
  "https://www.credit-repair-help.today",
  "https://www.needhelppayingbills.com",
  "https://www.gethuman.com",
  "https://www.newsyfast.com",
  "https://www.gyansanatan.in",
  "https://www.mygamesreward.com",
  "https://www.play.google.com/store/apps/details?id=com.toddler.coloring",
  "https://www.djsongsdownload.com",
  "https://www.play.google.com/store/apps/details?id=com.sugarchat.ai.gp",
  "https://www.theghostinmymachine.com",
  "https://www.usalawyerloan.shop",
  "https://www.restoretroubledteens.com",
  "https://www.adrianmall.com",
  "https://www.thebest100hotels.com",
  "https://www.ptindirectory.com",
  "https://www.property-insurance-quote.site",
  "https://www.play.google.com/store/apps/details?id=com.app.offerit",
  "https://www.djallindia.com",
  "https://www.bonolawyers.bio",
  "https://www.thetimeindian.com",
  "https://www.trc.taboola.com",
  "https://www.lawinfopedia.com",
  "https://www.skillypakistan.com",
  "https://www.fakaza2018.com",
  "https://www.arunachaldiary.com",
  "https://www.indiana-company.com",
  "https://www.lawyeraroundme.com",
  "https://www.lagradaonline.com",
  "https://www.uphail.com",
  "https://www.l7n8xf4.top",
  "https://www.gamesgoplay.com",
  "https://www.wheelofpets.com",
  "https://www.personal-injury-attorney-query.life",
  "https://www.healthcare4ppl.com",
  "https://www.play.google.com/store/apps/details?id=com.metropcs.metrozone",
  "https://www.heybeng.com",
  "https://www.infocoverage.com",
  "https://www.insuranceraj.shop",
  "https://www.buzzfile.com",
  "https://www.pubgkrapk.com",
  "https://www.cardekhoindia.in",
  "https://www.npino.com",
  "https://www.find-an-attorney-usa.xyz",
  "https://www.jiosaavnproapk.download",
  "https://www.snap2py.net",
  "https://www.newsmedia.cloud",
  "https://www.vietnameselawyers.com",
  "https://www.play.google.com/store/apps/details?id=com.free.gun.shooter.snipershooting",
  "https://www.barmanmusic.com.in",
  "https://www.awsogame.com",
  "https://www.factsfunda.com",
  "https://www.rtuexam.net",
  "https://www.moneypromax.com",
  "https://www.freelawyers.us",
  "https://www.foodstampsupport.net",
  "https://www.loveawake.com",
  "https://www.itunes.apple.com/us/app/id1622543751",
  "https://www.smartphonewallah.com",
  "https://www.mazheshetkari.com",
  "https://www.freedentalcare.us",
  "https://www.quotesandshayaris.com",
  "https://www.samzvlogs.online",
  "https://www.veterans-lawyer.life",
  "https://www.hesnody.com",
  "https://www.selfimprov.online",
  "https://www.ptetdcb2020.com",
  "https://www.gameshowdown.top",
  "https://www.sengov.com",
  "https://www.findlatestjob.in",
  "https://www.agregame.com",
  "https://www.dui-law.life",
  "https://www.jobeducareer.com",
  "https://www.latesnew.com",
  "https://www.allmobileguide.com",
  "https://www.abogadoshispanos.us",
  "https://www.starrypopulargame.com",
  "https://www.aprilfoolz.online",
  "https://www.play.google.com/store/apps/details?id=com.instabridge.android",
  "https://www.higamelab.com",
  "https://www.itunes.apple.com/us/app/id921827126",
  "https://www.embassypages.com",
  "https://www.freshmodapk.com",
  "https://www.play.google.com/store/apps/details?id=com.maybeyou",
  "https://www.inpics.net",
  "https://www.novagamerelitehub.com",
  "https://www.noticebangla24.xyz",
  "https://www.jobhelpnews.in",
  "https://www.embajadavenezuelausa.com",
  "https://www.personal-injury-attorny-look.life",
  "https://www.webbubble2.com",
  "https://www.play.google.com/store/apps/details?id=com.gi.talkinggummybear",
  "https://www.car-accident-attorneys.today",
  "https://www.gamepix.com",
  "https://www.opengovus.com",
  "https://www.syndicatedsearch.goog",
  "https://www.play.google.com/store/apps/details?id=com.fakecall.videocall.celebrity2",
  "https://www.biharboard10thresult.online",
  "https://www.play.google.com/store/apps/details?id=diamonds.free30",
  "https://www.gamebytexpresshub.com",
  "https://www.bestinsuranceusa.shop",
  "https://www.creditosenusa.com",
  "https://www.hostnev.com",
  "https://www.meetatruckdriver.com",
  "https://www.fazologix.com",
  "https://www.itunes.apple.com/us/app/id1472050293",
  "https://www.quicktransportsolutions.com",
  "https://www.dardmukti.in",
  "https://www.play.google.com/store/apps/details?id=com.appriss.mobilepatrol",
  "https://www.apkprovider.com",
  "https://www.imgtool.in",
  "https://www.play.google.com/store/apps/details?id=com.tomasgomis.snapfoodstamps",
  "https://www.blogspot.com",
  "https://www.bestinsuranceidea.online",
  "https://www.myarchive.in",
  "https://www.thecountyoffice.com",
  "https://www.bravonewz.com",
  "https://www.offerisnice.com",
  "https://www.xity.club",
  "https://www.play.google.com/store/apps/details?id=com.enflick.android.TextNow",
  "https://www.topnpi.com",
  "https://www.car-accident-attorneys-search.life",
  "https://www.veteranownedbusiness.com",
  "https://www.uspto.report",
  "https://www.quicklearn.top",
  "https://www.money123.us",
  "https://www.insurancegoodinfo.shop",
  "https://www.softtechinnovation.com",
  "https://www.higher-hire.com",
  "https://www.loaninsurance.shop",
  "https://www.forbes.com",
  "https://www.incomepeedia.in",
  "https://www.play.google.com/store/apps/details?id=com.xphotokit.chatgptassist",
  "https://www.infoorfutures.com",
  "https://www.mcqquestionbank.com",
  "https://www.womenshelters.org",
  "https://www.nationalevictions.com",
  "https://www.play.google.com/store/apps/details?id=com.sinyee.babybus.taxi",
  "https://1e009509ec65c3be825ab771bb4e8062.safeframe.googlesyndication.com",
  "https://4b2f659ec34b198cc7d18ee854e2c87d.safeframe.googlesyndication.com",
  "https://a3f151d1f7ce2c918136bee81eb96dc2.safeframe.googlesyndication.com",
  "https://83bd3aa79566cbfc1e43e5d618e90086.safeframe.googlesyndication.com",
  "https://533cdd1a71b33e57e8e9150c4a576f45.safeframe.googlesyndication.com",
  "https://0f1a738b77bb7977a9e62e8e6599e809.safeframe.googlesyndication.com",
  "https://0d2308eb63ba54c575493ad4e1e8e334.safeframe.googlesyndication.com",
  "https://syndicatedsearch.goog",
  "https://be41dafb3ff5dcf6cb09f335e8432a35.safeframe.googlesyndication.com",
  "https://02dcc44865024821980784a3fc7d0bfa.safeframe.googlesyndication.com",
  "https://7b6f7008ca5dc804e639299ff64eb498.safeframe.googlesyndication.com",
  "https://3f02fc046bd982edf5195caf0b9a0e1c.safeframe.googlesyndication.com",
  "https://4400d12cbec066c55ed8b4a0ec523619.safeframe.googlesyndication.com",
  "https://53af13e5fea3d66275c81f223a26e777.safeframe.googlesyndication.com",
  "https://741b17976d5be87fbee48ccd87a416b1.safeframe.googlesyndication.com",
  "https://0ca95c40503288a3d3418f0a194a74de.safeframe.googlesyndication.com",
  "https://f49fcd63f3cc2b8b79112947d3c8ed86.safeframe.googlesyndication.com",
  "https://9568457cf7380570d88cbb635ea94441.safeframe.googlesyndication.com",
  "https://20040b389c0acd5d16a983725c256d54.safeframe.googlesyndication.com",
  "https://92769506e7d89e0a30bedb5ec86d66b4.safeframe.googlesyndication.com",
  "https://e9d8b3de6299ccf0c7f67fc14c0af4ec.safeframe.googlesyndication.com",
  "https://9c6f238f7392032c74d9872d0aaf08dd.safeframe.googlesyndication.com",
  "https://99f9fc2b2c398a8c1487689aee0b8cf8.safeframe.googlesyndication.com",
  "https://7a782f176fd460186cc6339cd6f69dec.safeframe.googlesyndication.com",
  "https://897858ed8c505ec7fbc80a875e107b1e.safeframe.googlesyndication.com",
  "https://1ae00c2dab60b99d19cfb7fc950730c0.safeframe.googlesyndication.com",
  "https://f591456426c1cf54973bcaf1d88ffb85.safeframe.googlesyndication.com",
  "https://20040b389c0acd5d16a983725c256d54.safeframe.googlesyndication.com",
  "https://2dbc9316a6dc570f775344e90b766bae.safeframe.googlesyndication.com",
  "https://9d1586164b2229e2f0d69c2c7c0ba267.safeframe.googlesyndication.com",
  "https://7bf46eb4b7e60f4eb8bcb081a0a88871.safeframe.googlesyndication.com",
  "https://e5a017e8c53180f87aa2c277123ad902.safeframe.googlesyndication.com",
  "https://46fa795d4948c94f4034ff75052c9d3d.safeframe.googlesyndication.com",
  "https://8d59b0e8809186a2aae08292c9f993f8.safeframe.googlesyndication.com",
  "https://b27cda33a06c4667812d03429285e4e5.safeframe.googlesyndication.com",
  "https://c8f4f66279b1a7794194354f99d79b88.safeframe.googlesyndication.com",
  "https://40e1dbd1f4aca4ab21a54611220d9828.safeframe.googlesyndication.com",
  "https://1932e89c2235cbc35bc4e68bc69987a6.safeframe.googlesyndication.com",
  "https://4c7d2a23df8f391b016246d55ac0b788.safeframe.googlesyndication.com",
  "https://e015509c2f54f63fb1d89ad512466a87.safeframe.googlesyndication.com",
  "https://0b32b63345a860f5558035ca009c754b.safeframe.googlesyndication.com",
  "https://961ba68a2c0e76b6402b82670d0ab943.safeframe.googlesyndication.com",
  "https://99a47b0957314c6708ef98d7fe812c16.safeframe.googlesyndication.com",
  "https://45d726e2128e3520853b615989019b54.safeframe.googlesyndication.com",
  "https://6633921738661c796ec60d943f942d5e.safeframe.googlesyndication.com",
  "https://c2fcca691da5b1c4022b84df194e5f8d.safeframe.googlesyndication.com",
  "https://fcf6d61a3e690a28fdf2d9d70dbe9df1.safeframe.googlesyndication.com",
  "https://d6f78fdffc8ebf99444509cb999743dd.safeframe.googlesyndication.com",
  "https://89cebf064f8e949a08160ea3c2611afe.safeframe.googlesyndication.com",
  "https://61cd717cf30c763cedbb5ad4bce4e4a5.safeframe.googlesyndication.com",
  "https://924684714fde67619dbbd05075eea851.safeframe.googlesyndication.com",
  "https://7a782f176fd460186cc6339cd6f69dec.safeframe.googlesyndication.com",
  "https://98a484b203b6780b5bb1f89ad6104196.safeframe.googlesyndication.com",
  "https://16fe0d2af6d9741d7651fda804e7ea5d.safeframe.googlesyndication.com",
  "https://0363a662a909410e4fedd1ff48aa2904.safeframe.googlesyndication.com",
  "https://65310e11b34f254ba67014642cb277cd.safeframe.googlesyndication.com",
  "https://www.stockorinfo.com",
  "https://cliqueutil.com",
  "https://imasdk.googleapis.com",
  "https://imasdk.googleapis.com",
  "https://24e97725433d1a3e8682e8ccb1953de0.safeframe.googlesyndication.com",
  "https://a53ea55c1558f48d789275bb54d6023f.safeframe.googlesyndication.com",
  "https://57012ef56c1dffb3ad99f4c36bede7bd.safeframe.googlesyndication.com",
];

const INVALID_TLDs = [
  ".xyz",
  ".top",
]

function extractTLD(domain: string) {
  const parts = domain.split('.');
  return `.${parts[parts.length - 1]}`;
}

function removeTrailingSlash(url: string) {
  return url.replace(/\/$/, '');
}

export function verifyDomain(domain: string) { 
  const domain_without_trailing_slash = removeTrailingSlash(domain);
  return (INVALID_DOMAINS.includes(domain_without_trailing_slash) || INVALID_TLDs.includes(extractTLD(domain_without_trailing_slash)))
}
