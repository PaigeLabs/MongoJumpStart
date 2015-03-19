db.eval(function() { 
    db.users.find({roles : 'speaker'}).forEach(function(e) {
        e.slug = e.displayName.toLowerCase().replace(' ', '-');
        db.users.save(e);
    });
});