import { AboutIcon } from '../../icons/AboutIcon';
import { AssetsIcon } from '../../icons/AssetsIcon';
import { DisclaimerIcon } from '../../icons/DisclaimerIcon';
import { InvestIcon } from '../../icons/InvestIcon';
import { ReactElement } from 'react';

import { Typography } from '../../components/Typography/Typography';
import { Link } from '../../form-components/Link/Link';

export interface FaqQuestion {
  question: string;
  answer: React.ReactNode;
}

export interface IconProps {
  color?: string;
  size?: number;
}

export interface FaqCategory {
  title: string;
  description: string;
  Icon: (props: IconProps) => ReactElement;
  questions: FaqQuestion[];
}

export const faqCategoriesData = [
  {
    id: 'about',
    title: 'About',
    description: 'Learn about Rares, who we are, what we do, and why we do it',
    Icon: (props: IconProps) => <AboutIcon {...props} />,
    questions: [
      {
        question: 'Who is Rares?',
        answer: (
          <Typography>
            Rares is an alternative asset investment platform that allows you to
            invest in fractional shares of ultra rare, vintage, and collectible
            assets where you can buy, sell, and trade.
            <br />
            <br />
            It was founded by former Notre Dame football standout and retired
            NFL athlete Gerome Sapp and close friend Hector Tantoh, who sought
            to increase access and empower you to benefit economically based on
            cultures you know and create-embodying the desire for culture, work
            ethic, and providing exceptional products and services.
          </Typography>
        ),
      },
      {
        question: 'How does it work?',
        answer: (
          <Typography>
            Rares is a platform that enables users to easily invest in sneaker
            culture by buying and trading shares in rare sneakers. Our goal is
            to make it easy for anyone to invest in the culture.
            <br />
            <ol>
              <li>
                Rares acquires authentic sneakers and splits them into tradeable
                shares
              </li>
              <br />
              <li>
                We offer these shares to the public via an Initial Public
                Offering (IPO) on our platform
              </li>
              <br />
              <li>
                After the IPO users who hold shares can either hold on to them
                or trade them with other users on our platform as the value of
                the shoe changes
              </li>
              <br />
              <li>
                When Rares auctions/sells the shoe, users who hold shares in the
                shoe get paid out based on the sale price of the sneaker and
                number of shares they own
              </li>
            </ol>
            <br />
            All shares on the Rares platform are SEC qualified offerings.
          </Typography>
        ),
      },
      {
        question: 'Can I be on the platform if I am not actively investing?',
        answer: (
          <Typography>
            Yes! Although ultimately most people end up buying or selling a
            share, the Rares platform is a place where like-minded sneaker
            lovers and enthusiasts can interact with each other. Feel free to
            hang out and check out some of our content posted on the site, read
            our blogs and see what others are investing in.
          </Typography>
        ),
      },
    ],
  },
  {
    id: 'investing',
    title: 'Investing',
    description: 'Learn about how investing works on the Rares platform?',
    Icon: (props: IconProps) => <InvestIcon {...props} />,
    questions: [
      {
        question: 'Who can invest?',
        answer: (
          <Typography>
            Anyone over the age of 18 who is a US Citizen or legal resident of
            the USA (and can pass our anti-money laundering checks) is eligible
            to invest in our platform. Both accredited and non-accredited
            investors can invest on our platform.
          </Typography>
        ),
      },
      {
        question: 'What is an accredited investor?',
        answer: (
          <Typography>
            An accredited investor as stipulated by the SEC is an individual
            with annual income exceeding $200,000 ($300,000 for joint income)
            for the last two years with the expectation of earning the same or
            higher income in the current year. A person is also considered an
            accredited investor if they have a net worth exceeding $1 million,
            either individually or jointly with their spouse, not including
            their primary residence.
          </Typography>
        ),
      },
      {
        question: 'Do I need to be an accredited investor to invest?',
        answer: (
          <Typography>
            No. A non-accredited investor can invest in our platform. The only
            difference is that as per SEC regulation, a non-accredited investor
            can not invest more than 10% of their stated income or net worth in
            any offering.
          </Typography>
        ),
      },
      {
        question: 'What are the risks?',
        answer: (
          <Typography>
            As with any investment, there is a risk of losing some, or all of
            the value of your investment. We do not guarantee that the value of
            your shares will increase. However, we have employed experts in the
            acquisition, timing and disposition of sneakers and collectible
            assets. Our aim is to provide you with the best possible,
            investment-grade sneakers available.
          </Typography>
        ),
      },
      {
        question: 'What fees can I expect?',
        answer: (
          <Typography>
            Rares makes an effort to provide transparency on all fees charged in
            the investment process. Additionally, it is in RaresU+2019 DNA to
            provide access for everyone, meaning that our aim is to minimize
            fees so you have more money to invest in sneakers, and your returns
            are larger! Fees are assessed in two ways:
            <br />
            <br />
            <ol>
              <li>
                We charge a nominal fee to cover our brokerage costs. This
                typically equates to $1 per $100 of the total value of share
                transfer (i.e: if you purchase $200 worth of shares, there will
                be a $2 fee for the share transfer). Note: Rares is not legally
                allowed to charge a commission for sales or trades. This fee is
                charged by our broker-dealer, and Rares does not receive any
                portion of this fee.
              </li>
              <br />
              <li>
                There is an annual management fee assessed for the ongoing
                maintenance and acquisition of assets under management. This fee
                will be assessed against the overall value of the series. Note:
                this fee is not assessed to any individual investor. It is
                collected annually by the fund manager and is levied on the
                series. This fee will be most visible upon asset liquidation
                while calculating the total payout of an asset.
              </li>
            </ol>
          </Typography>
        ),
      },
      {
        question: 'How do I exit my investment?',
        answer: (
          <Typography>
            Once you buy shares in an asset your position can be liquidated in
            two ways:
            <ol>
              <li>
                Sell them to another user on our platform during open trading
                hours. Note Rares cannot guarantee you will find a buyer or
                seller to match your desired price.
              </li>
              <br />
              <li>
                Wait until we liquidate the asset and get paid out based on your
                outstanding shares value at liquidation.
              </li>
            </ol>
          </Typography>
        ),
      },
      {
        question: 'Is there an investment minimum?',
        answer: (
          <Typography>
            Some IPOs may have a minimum number of shares you need to buy to
            participate in the IPO. However after the IPO is closed and
            secondary trading begins, there is no minimum stock requirement for
            trading.
          </Typography>
        ),
      },
      {
        question: 'How do I make money on Rares?',
        answer: (
          <Typography>
            When you buy shares on Rares you own a piece of the underlying asset
            (the sneaker). As the value of the shoe rises, so does the value of
            your shares. You can decide to sell your share to a buyer during
            open trading hours through our partner broker dealer. Rares cannot
            guarantee that a buyer will be available at your asking price.
            Alternatively, you can hold on to your shares until we have a
            liquidation event on the asset, and then cash out on the value of
            your shares at liquidation.
          </Typography>
        ),
      },
      {
        question: 'When does Rares sell shoes for payout?',
        answer: (
          <Typography>
            Selling any asset on our platform is left to the discretion of Rares
            and its advisers. However, because we own a fraction of every asset
            on our platform we have incentive and an aligned interest with all
            of our investors.
          </Typography>
        ),
      },
      {
        question: 'Can I invest from outside the United States?',
        answer: (
          <Typography>
            We currently only accept investment from residents of the United
            States. We are working on plans for international expansion, and
            will make an announcement once we are able to do so.
          </Typography>
        ),
      },
    ],
  },
  {
    id: 'assets',
    title: 'Assets',
    description: 'Discover how assets work on the Rares platform',
    Icon: (props: IconProps) => <AssetsIcon {...props} />,
    questions: [
      {
        question: 'What are my tax implications?',
        answer: (
          <Typography>
            We will issue 1099s for investors for every calendar year in which
            they:
            <ol>
              <li>Sell their holdings and/or</li>
              <br />
              <li>Receive distributions of more than $10</li>
            </ol>
          </Typography>
        ),
      },
      {
        question: 'Who owns the assets?',
        answer: (
          <Typography>
            All assets on the Rares platform are owned by our subsidiary, 370
            Markets, LLC. Making an investment through Rares occurs via a
            special purpose entity designed specifically to hold that specific
            asset.
          </Typography>
        ),
      },
      {
        question: 'Does Rares own any shares in the IPOs?',
        answer: (
          <Typography>
            Rares owns a small fraction of every asset IPOed on our platform.
            Therefore, Rares is always aligned with our investors throughout the
            decision-making, maintenance and disposition process.
          </Typography>
        ),
      },
      {
        question: 'When does Rares sell shoes for payout?',
        answer: (
          <Typography>
            Selling any asset on our platform is left to the discretion of Rares
            and its advisers. However, because we own a fraction of every asset
            on our platform we are incentive to have an aligned interest with
            all of our investors.
          </Typography>
        ),
      },
      {
        question: 'Is there a limit to the number of shares I can buy?',
        answer: (
          <Typography>
            Yes. No single investor is allowed to own more than 10% of the total
            outstanding shares of any given asset. If you are interested in
            acquiring the asset outright, please email us at info@rares.io.
          </Typography>
        ),
      },
      {
        question: 'Can I buy the shoe outright?',
        answer: (
          <Typography>
            If you are interested in buying a shoe outright, please email us at
            info@Rares.io.
          </Typography>
        ),
      },
    ],
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    description: 'Read the fine print on legal descriptions and details',
    Icon: (props: IconProps) => <DisclaimerIcon {...props} />,
    questions: [
      {
        question: 'Legal Disclaimer',
        answer: (
          <Typography>
            Please note: investing is risky. There is potential to lose some, or
            all, of your investment. Rares, 370 Legacy, Inc and 370 Markets LLC
            do not guarantee returns, nor appreciation of any asset on the Rares
            platform. Additionally, the opinions expressed on the Rares platform
            are individual opinions and do not represent qualified investment
            advice, nor are guarantees of the value of any investment. Please do
            your own research before investing in any asset. Additionally, there
            is a schedule of fees associated with investing, as well as tax
            implications associated with investing. Rares has attempted to
            outline these fees and implications on this FAQ page. Please note,
            Rares is neither a qualified investment advisor, representative,
            broker-dealer or tax advisor, and should not be treated as such.
            <br />
            <br />
            Prior to using the system, you are required to read the{' '}
            <Link to="/about/terms">Terms of Use</Link> and{' '}
            <Link to="/about/privacy">Privacy Policy</Link>.
          </Typography>
        ),
      },
    ],
  },
];
