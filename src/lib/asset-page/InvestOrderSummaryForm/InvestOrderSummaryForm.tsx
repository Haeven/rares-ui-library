import { useEffect, useState } from 'react';
import { Button } from '../../buttons/Button/Button';
import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { CurrencyFormatter } from '../../CurrencyFormatter/CurrencyFormatter';
import { Checkbox } from '../../form-components/Checkbox/Checkbox';
import { FormError } from '../../form-components/FormError/FormError';
import { Spacer } from '../../form-components/Spacer/Spacer';

interface InvestOrderSummaryFormProps {
  numShares: number;
  totalCost: number;
  balanceAfterPurchase: number;
  onClickBack: () => void;
  onClickCompleteBuyOrder: () => void;
  submittingOrder: boolean;
  formError?: string;
}

export const InvestOrderSummaryForm = ({
  numShares,
  totalCost,
  balanceAfterPurchase,
  onClickBack,
  onClickCompleteBuyOrder,
  submittingOrder,
  formError,
}: InvestOrderSummaryFormProps) => {
  const [confirmsAccreditationUnchanged, setConfirmsAccreditationUnchanged] =
    useState(false);
  const [agreesToTerms, setAgreesToTerms] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const localOnClickBuyOrder = () => {
    if (confirmsAccreditationUnchanged && agreesToTerms) {
      onClickCompleteBuyOrder();
    } else {
      setShowErrors(true);
    }
  };

  useEffect(() => {
    if (confirmsAccreditationUnchanged && agreesToTerms) {
      setShowErrors(false);
    }
  }, [agreesToTerms, confirmsAccreditationUnchanged]);

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" gap="15px">
        <Heading fontStyle="H4">Order Summary</Heading>
        <Flex justifyContent="space-between">
          <Typography color="darkGrey">Number of Shares</Typography>
          <Typography bold>{numShares}</Typography>
        </Flex>
        <Flex justifyContent="space-between">
          <Typography color="darkGrey">Total Cost</Typography>
          <Typography bold>
            <CurrencyFormatter>{totalCost}</CurrencyFormatter>
          </Typography>
        </Flex>
        <Flex justifyContent="space-between">
          <Typography color="darkGrey">
            Wallet Balance after purchase
          </Typography>
          <Typography bold>
            <CurrencyFormatter>{balanceAfterPurchase}</CurrencyFormatter>
          </Typography>
        </Flex>
      </Flex>
      <Spacer size="20px" />
      <Flex flexDirection="column" gap="20px">
        <Checkbox
          isChecked={confirmsAccreditationUnchanged}
          onChange={() =>
            setConfirmsAccreditationUnchanged(!confirmsAccreditationUnchanged)
          }>
          <Typography>
            I confirm that my accreditation status (which includes my stated
            income and net worth) has not changed
          </Typography>
          {showErrors && !confirmsAccreditationUnchanged && (
            <Typography color="errorPrimary" mt="4px">
              You must confirm that your accreditation status has not changed
            </Typography>
          )}
        </Checkbox>
        <Checkbox
          isChecked={agreesToTerms}
          onChange={() => setAgreesToTerms(!agreesToTerms)}>
          <Typography>
            I agree to the terms of Subscription Agreement for this asset
          </Typography>
          {showErrors && !agreesToTerms && (
            <Typography color="errorPrimary" mt="4px">
              You must agree to the terms
            </Typography>
          )}
        </Checkbox>
        {formError && <FormError>{formError}</FormError>}
        <Flex gap="25px" justifyContent="flex-end">
          <Button variant="secondary" onClick={onClickBack}>
            Back
          </Button>
          <Button
            variant="primary"
            onClick={localOnClickBuyOrder}
            loading={submittingOrder}>
            Complete Buy Order
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

I see the chiropractor several times per week. As one who carries stress in their neck - this is truly a blessing. Immediately relaxes my muscles and helps me unwind.`'
I've had a severely pinched nerve in my neck for approximately 2 months. I got very little if any relief from the chiropractor. After just a few 15 min cycles im feeling the results. The pins and needles are greatly diminished. I would rather the remote didn't beep as loud but ill take it. Its a great product..thank you!!
Thanks so much Kenko Back
Loving it
I use a computer a lot, so I have started using it on a computer sitting in a chair, which provides deep massage to my back and reduces tension. Any pulse massager will produce a slight pain at the beginning of use. The feeling of being charged varies from person to person but it is safe to use.
I am suffering from neck pain badly. I feel much better every time after I use the massager for 15 minutes. It’s wireless and has a separate remote. It’s very moveable and portable. The two connectors are full of elasticity. They are able to move down and extend out a little bit, so it fits my neck perfectly.
This is so easy to use!!! I usually puts my muscle stimulation massager on when my muscles are sore and tense. It gets annoying with all the lines that are connected. Most of the time I fall asleep with it and they just get tangled. With this I don't need to worry about that. I can just put it on my neck any where any time and I won't have to worry about annoying lines or needing to bring the main machine. I can be mobile with it. It also heats up which feels wonderful!! I love it!
This little gadget took a little getting used to at first but after my second use, it felt wonderful. Fits comfortably around my neck and the heating function feels amazing. Simple operation and the instructions were easy to read. The beep sound is loud so I can be sure that I can hear the modes changing or the unit turning off. The auto shut off after 15 minutes was a nice touch as well. Small and low profile makes this easy to take with me when I am traveling.
Great product. I am so glad I ordered this! Really helps with my neck stiff neck and neck pain.
My husband and I both use the device for our intermittent neck issues and it is extremely effective. I love that it is so compact and portable and holds the charge for longer than expected. The 15 minute sessions (3 treatment types) are very effective and the love the option to add heat and control the strength of the pulses using the convenient remote control.
I get a lot of sinus headache and tension in my neck. I use this upon waking and before bed. It has helped me out so much since receiving. Very happy with purchase.
It works well
Thank you
It is good that I can still do work in the house while using it. A bit ticklish using acupuncture mode but once you set it to the right mode it works well. Feel good everytime I use it.
Great packaging, it’s in a prefect condition. I got a nice white looking one. When I was first trying it, i feel like I was being Shock by electric in a good way. It moves my neck’s muscles. Once i get use to it, i totally enjoy it. It is quite, light way and good looking. I use it more than twice a day. It’s prefect for people who work in front of the computer who works for long time or for people who play card games for a while.
Imagine how satisfying when you worked all day long, You have someone to help you massage your tired body while you get home? And now you have this service anywhere you desire. This device is so handy and you can take 30 mins massage 4-5 times with fully charged on the go. I really enjoy the mode of hand hammering,it helps me relaxing the neck muscle so well. Overall it is a good buy. Highly recommend.
I was a little skeptical about buying it and if it would work but after using it, it is probably one of the best products for my neck I ever bought.
I was in a car accident at 57 years old and had accute whiplash. That was 5 months ago. I went through physical therapy but little help. This is amazing and feel so much better now after using this
Ignore all the reviews that say this is product produces a weak massage (my favorite mode). They didn't read the instructions. To feel any results, your neck needs to be damp. For best results, your neck needs to be WET. I have a lot of pain and stiffness in my neck to the extent that I can barely turn my head side to side. I noticed an immediate improvement after the first use and it's gotten incrementally better each time I've used the product.
I used it immediately after I received it. I often cause headaches from the cervical spine. Its heating function is very comfortable. The micro current pulse mode has different gears. You can find a suitable one according to your needs. Recommend!
I buy this neck massager for myself because I often sit at front of computer to play video games and that make my neck always feel Street. This electric pulse neck massager helps to relax my neck muscle and reduce my neck pain. Right now, I used it every night to relax before to bad, and it works pretty well.
I've had headaches and a tense neck for a long time so I want to try this neck massager. Looks like a lot of people are recommending it. After several uses, I think I did have a big relief and I'm sleeping better at nights. I like that it's portable so I can still walk around while using it and don't have to sit still at the same place near the power outlet. There are 3 different massage modes and 15 levels. I think level 3 is already strong enough for me.
I recently bought this Neck massager, and I really love it. A very good product offering excellent value for money. It has 3 massage modes-all of them work beautifully. It combines three types of relief: acupuncture, knocks, and massage. My favorite one is the automatic mode, and the massage mode worked the best for me.
Oh how we really love this neck massager! The whole family! Husband and I work a ton in front of the computer and our neck always gets so stiff and sore. We just love putting this massager on our neck while watching TV in the night. It did feel a little weird first time though. Just be careful not to put it on high first if you don’t know how strong you can take because it may creat involuntary muscle spasm while using it. It’s such a weird feeling! Lol! Father had shoulder surgery and he loves ...
I suffer from a bunch of migraines caused by a stressful job. First impression this dude is way sturdier and bigger than I figured it would’ve been. I used it to help ease up some of the knots and tension I carry in my shoulders and neck.Me on the other hand I love deep tissue massage. I’m very impressed.
The neck massager works great for my mom. My mom always have neck problem and she got pains all the time with her neck, so I decided to buy the neck massager as a gift for her. She loves the massager and she said it really release her pain after only one time use.
Constantly plagued by neck muscle pain. Hate to be tied to a heating pad and electric outlet. This is the best solution to comfort and maneuverability. Fifteen minutes of this therapy and my neck pain diminished to near zero and full mobility to turn my head was restored. Love this product - it was definitely worth the money. Highly recommend.
Just like a tens unit but without the cords and sticky pads. Really helps my neck pain!
I though I received a broken product. However, I just misused it. First of all, I need to gently wet my neck area before putting on the massager . Then, push the start button. I feel comfortable to use this neck massager, and it feels like electricity flows through my neck, relaxing my neck muscles. This neck massager has a U-shaped design, which can fit almost everyone’s neck.
I’m so glad I bought this neck massager! Since working from home, I constantly get neck pain (and honestly pain all over). I was looking for something lightweight and wireless so that I am not restricted from moving around. This was perfect!
I love this. It is amazing for my neck. Hard to describe how good this feels on my head and neck! Highly recommend!
Good product!
Both my husband and I like this Intelligent Portable Neck Massage very much. It's made of silica gel and it's very soft to wear around the neck without any burden and it's very light. It has three massage modes. My favorite is its heating function combined with electrical pulse therapy. It really relieves neck pain.
It's good massager for anywhere you want to use really useful with heat and vibration mode just use the remote to switch easy to use nice designed and packaging so far so good I used that for driving that's great for me !!
This neck massager is really worth buying. It can not only stimulate muscles through EMS to achieve the relaxing effect, but also has the heating function. It can be used together with the massage function or alone, I like both ways. And the battery life is very good, a charge can be used for a long time. With the little remote, it works way easier, four keys, two for mode and heat up, two for levels, easy to use!
I was pleasantly surprised at how intense the massage was . Easily control the intensity levels with the remote.