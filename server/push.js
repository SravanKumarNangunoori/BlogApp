const mongoose = require('mongoose');
const Subscribers = require("./models/subscribersModel.js")
const q = require('q');
const webPush = require('web-push');


module.exports.pushToUser = function(req, res) {
    // console.log(req.data.title);
    const payload = {
        title: "New post on the blog app",
        message: "Do read it",
    };
    // var subscriber = new Subscribers(req.body);
    Subscribers.find({}, function(err, subscriptions) {
        let parallelSubscriptionCalls = subscriptions.map((subscription) => {
            return new Promise((resolve, reject) => {
                const pushSubscription = {
                    endpoint: subscription.endpoint,
                    keys: {
                        p256dh: subscription.keys.p256dh,
                        auth: subscription.keys.auth
                    }
                };

                const pushPayload = JSON.stringify(payload);
                const pushOptions = {
                    vapidDetails: {
                        subject: "http://samplenameblogapp.com",
                        privateKey: "svPBL7I9Aaq1iJUxoywo_ghax55U8wu-KIqNoU4dU0o",
                        publicKey: "BLLYeG-5mZZpfzTbFnVqPPGwr-dBVkqeX6RA2YRu3SZ1HBFz3OeBqNPJ81_SkCU_tdRlT9BFllYZ12MHApb2pgA"
                    },
                    TTL: payload.ttl,
                    headers: {}
                };
                webPush.sendNotification(
                    pushSubscription,
                    pushPayload,
                    pushOptions
                ).then((value) => {
                    resolve({
                        status: true,
                        endpoint: subscription.endpoint,
                        data: value
                    });
                }).catch((err) => {
                    reject({
                        status: false,
                        endpoint: subscription.endpoint,
                        data: err
                    });
                });
            });
        });
        q.allSettled(parallelSubscriptionCalls).then((pushResults) => {
            console.info(pushResults);
        });
        res.json({
            data: 'Push triggered'
        });
    })
};